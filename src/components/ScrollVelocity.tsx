import { useRef, useLayoutEffect, useState, RefObject, CSSProperties, ReactNode } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from 'motion/react';
import { getSkillIcon } from '@/lib/skillIcons';
import './ScrollVelocity.css';

function useElementWidth(ref: RefObject<HTMLElement>) {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    function updateWidth() {
      if (ref.current) {
        setWidth(ref.current.offsetWidth);
      }
    }
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, [ref]);

  return width;
}

interface TextItem {
  name: string;
}

interface Skill {
  name: string;
  level: number;
  category: string;
}

interface VelocityMapping {
  input: [number, number];
  output: [number, number];
}

interface ScrollVelocityProps {
  scrollContainerRef?: RefObject<HTMLElement>;
  texts?: TextItem[];
  skillRows?: Skill[][];
  velocity?: number;
  className?: string;
  damping?: number;
  stiffness?: number;
  numCopies?: number;
  velocityMapping?: VelocityMapping;
  parallaxClassName?: string;
  scrollerClassName?: string;
  parallaxStyle?: CSSProperties;
  scrollerStyle?: CSSProperties;
}

export const ScrollVelocity = ({
  scrollContainerRef,
  texts = [],
  skillRows = [],
  velocity = 100,
  className = '',
  damping = 50,
  stiffness = 400,
  numCopies = 6,
  velocityMapping = { input: [0, 1000], output: [0, 5] },
  parallaxClassName = 'parallax',
  scrollerClassName = 'scroller',
  parallaxStyle,
  scrollerStyle
}: ScrollVelocityProps) => {
  interface VelocityTextProps {
    children: ReactNode;
    baseVelocity?: number;
    scrollContainerRef?: RefObject<HTMLElement>;
    className?: string;
    damping?: number;
    stiffness?: number;
    numCopies?: number;
    velocityMapping?: VelocityMapping;
    parallaxClassName?: string;
    scrollerClassName?: string;
    parallaxStyle?: CSSProperties;
    scrollerStyle?: CSSProperties;
  }

  function VelocityText({
    children,
    baseVelocity = velocity,
    scrollContainerRef,
    className = '',
    damping,
    stiffness,
    numCopies,
    velocityMapping,
    parallaxClassName,
    scrollerClassName,
    parallaxStyle,
    scrollerStyle
  }: VelocityTextProps) {
    const baseX = useMotionValue(0);
    const scrollOptions = scrollContainerRef ? { container: scrollContainerRef } : {};
    const { scrollY } = useScroll(scrollOptions);
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
      damping: damping ?? 50,
      stiffness: stiffness ?? 400
    });
    const velocityFactor = useTransform(
      smoothVelocity,
      velocityMapping?.input || [0, 1000],
      velocityMapping?.output || [0, 5],
      { clamp: false }
    );

    const copyRef = useRef<HTMLSpanElement>(null);
    const copyWidth = useElementWidth(copyRef);

    function wrap(min: number, max: number, v: number): number {
      const range = max - min;
      const mod = (((v - min) % range) + range) % range;
      return mod + min;
    }

    const x = useTransform(baseX, (v: number) => {
      if (copyWidth === 0) return '0px';
      return `${wrap(-copyWidth, 0, v)}px`;
    });

    const directionFactor = useRef<number>(1);
    useAnimationFrame((t: number, delta: number) => {
      let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

      const velocityValue = velocityFactor.get() as number;
      if (velocityValue < 0) {
        directionFactor.current = -1;
      } else if (velocityValue > 0) {
        directionFactor.current = 1;
      }

      moveBy += directionFactor.current * moveBy * velocityValue;
      baseX.set(baseX.get() + moveBy);
    });

    const spans: JSX.Element[] = [];
    for (let i = 0; i < (numCopies || 6); i++) {
      spans.push(
        <span className={className} key={i} ref={i === 0 ? copyRef : null}>
          {children}
        </span>
      );
    }

    return (
      <div className={parallaxClassName} style={parallaxStyle}>
        <motion.div className={scrollerClassName} style={{ x, ...scrollerStyle }}>
          {spans}
        </motion.div>
      </div>
    );
  }

  return (
    <section>
      {skillRows.length > 0 ? (
        // Render skill rows with multiple skills per row
        skillRows.map((skillRow, index) => (
          <VelocityText
            key={index}
            className={className}
            baseVelocity={index % 2 !== 0 ? -velocity : velocity}
            scrollContainerRef={scrollContainerRef}
            damping={damping}
            stiffness={stiffness}
            numCopies={numCopies}
            velocityMapping={velocityMapping}
            parallaxClassName={parallaxClassName}
            scrollerClassName={scrollerClassName}
            parallaxStyle={parallaxStyle}
            scrollerStyle={scrollerStyle}
          >
            {skillRow.map((skill, skillIndex) => (
              <span 
                key={skillIndex} 
                className="skill-icon-item"
                title={skill.name}
                data-tooltip={skill.name}
              >
                {getSkillIcon(skill.name)}
              </span>
            ))}
            &nbsp;
          </VelocityText>
        ))
      ) : (
        // Fallback to original text rendering
        texts.map((text, index) => (
          <VelocityText
            key={index}
            className={className}
            baseVelocity={index % 2 !== 0 ? -velocity : velocity}
            scrollContainerRef={scrollContainerRef}
            damping={damping}
            stiffness={stiffness}
            numCopies={numCopies}
            velocityMapping={velocityMapping}
            parallaxClassName={parallaxClassName}
            scrollerClassName={scrollerClassName}
            parallaxStyle={parallaxStyle}
            scrollerStyle={scrollerStyle}
          >
            {text.name}&nbsp;
          </VelocityText>
        ))
      )}
    </section>
  );
};

export default ScrollVelocity;
