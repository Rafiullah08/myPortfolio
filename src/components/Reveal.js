import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Box = styled.div`
  opacity: ${({ show }) => (show ? 1 : 0)};
  transform: translateY(${({ show }) => (show ? "0" : "32px")});
  transition: opacity 0.75s ease, transform 0.75s ease;
  transition-delay: ${({ delay }) => delay || 0}ms;
`;

const Reveal = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      },
      { threshold: 0.14, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Box ref={ref} show={show} delay={delay}>
      {children}
    </Box>
  );
};

export default Reveal;
