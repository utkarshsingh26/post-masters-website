import { Box, Avatar, Tooltip } from "@mui/material";
import { useRef, useLayoutEffect, useState } from "react";

const skills = [
  { name: "React", src: "react.png" },
  { name: "Node.js", src: "node.jpg" },
  { name: "Firebase", src: "firebase.png" },
  { name: "TypeScript", src: "typescript.svg" },
  { name: "JavaScript", src: "javascript.png" },
  { name: "Python", src: "python.jpg" },
  { name: "PostgreSQL", src: "postgresql.png" },
  { name: "Docker", src: "docker.png" },
  { name: "AWS", src: "aws.png" },
  { name: "Git", src: "git.png" },
  { name: "Figma", src: "figma.png" },
  { name: "Java", src: "java.png" },
  { name: "C", src: "c.jpg" },
  { name: "C++", src: "cpp.png" },
  { name: "SQL", src: "sql.webp" },
  { name: "NoSQL", src: "nosql.png" },
  { name: "MongoDB", src: "mongodb.png" },
];

export default function SkillsNetworkGraph() {
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setDimensions({ width: rect.width, height: rect.height });
    }
  }, []);

  const centerX = dimensions.width / 2;
  const centerY = dimensions.height / 2;
  const radius = Math.min(centerX, centerY) * 0.8;

  return (
    <Box
      ref={containerRef}
      sx={{
        py: 8,
        px: 2,
        position: "relative",
        height: { xs: 500, md: 600 },
        width: "100%",
        maxWidth: 800,
        margin: "0 auto",
        borderRadius: 4,
        textAlign: "center",
      }}
    >
      {/* SVG Layer for lines */}
      <svg
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
      >
        {skills.map((_, index) => {
          const angle = (index / skills.length) * 2 * Math.PI;
          const x = centerX + radius * Math.cos(angle);
          const y = centerY + radius * Math.sin(angle);
          return (
            <line
              key={index}
              x1={centerX}
              y1={centerY}
              x2={x}
              y2={y}
              stroke="#1976d2"
              strokeWidth="2"
            />
          );
        })}
      </svg>

      {/* Central Node */}
      <Box
        sx={{
          position: "absolute",
          top: centerY - 50,
          left: centerX - 50,
          width: 100,
          height: 100,
          backgroundColor: "#1976d2",
          color: "white",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "bold",
          fontSize: 16,
          boxShadow: 3,
          zIndex: 2,
        }}
      >
        Skills
      </Box>

      {/* Skill Nodes */}
      {skills.map((skill, index) => {
        const angle = (index / skills.length) * 2 * Math.PI;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        return (
          <Box
            key={index}
            sx={{
              position: "absolute",
              top: y - 30,
              left: x - 30,
              zIndex: 2,
            }}
          >
            <Tooltip title={skill.name} arrow>
              <Avatar
                src={skill.src}
                alt={skill.name}
                sx={{
                  width: 60,
                  height: 60,
                  border: "2px solid #1976d2",
                }}
              />
            </Tooltip>
          </Box>
        );
      })}
    </Box>
  );
}
