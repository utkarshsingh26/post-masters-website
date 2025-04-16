import { Box, Avatar, Tooltip } from "@mui/material";
import { useRef, useLayoutEffect, useState } from "react";

// Define each skill with its image and position (% based)
const skills = [
  { name: "React", src: "react.png", top: "10%", left: "20%" }, 
  { name: "Node.js", src: "node.jpg", top: "20%", left: "70%" }, 
  { name: "Firebase", src: "firebase.png", top: "70%", left: "15%" }, 
  { name: "TypeScript", src: "typescript.svg", top: "75%", left: "60%" },  
  { name: "JavaScript", src: "javascript.png", top: "40%", left: "10%" }, 
  { name: "Python", src: "python.jpg", top: "15%", left: "50%" }, 
  { name: "PostgreSQL", src: "postgresql.png", top: "60%", left: "85%" }, 
  { name: "Docker", src: "docker.png", top: "50%", left: "80%" },
  { name: "AWS", src: "aws.png", top: "35%", left: "80%" }, 
  { name: "Git", src: "git.png", top: "5%", left: "35%" },  
  { name: "Figma", src: "figma.png", top: "85%", left: "40%" }, 
  { name: "Java", src: "java.png", top: "100%", left: "40%" }, 
  { name: "C", src: "c.jpg", top: "100%", left: "50%" }, 
  { name: "C++", src: "cpp.png", top: "100%", left: "60%" }, 
  { name: "SQL", src: "sql.webp", top: "83%", left: "83%" }, 
  { name: "NoSQL", src: "nosql.png", top: "80%", left: "90%" },
  { name: "MongoDB", src: "mongodb.png", top: "10%", left: "90%" },
];

export default function SkillsNetworkGraph() {
  const containerRef = useRef(null);
  const centerRef = useRef(null);
  const [lines, setLines] = useState([]);

  useLayoutEffect(() => {
    if (!containerRef.current || !centerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const centerRect = centerRef.current.getBoundingClientRect();

    const centerX = centerRect.left + centerRect.width / 2 - containerRect.left;
    const centerY = centerRect.top + centerRect.height / 2 - containerRect.top;

    const newLines = skills.map((skill, index) => {
      const el = document.getElementById(`skill-${index}`);
      if (!el) return null;

      const rect = el.getBoundingClientRect();
      const x = rect.left + rect.width / 2 - containerRect.left;
      const y = rect.top + rect.height / 2 - containerRect.top;

      return { x1: centerX, y1: centerY, x2: x, y2: y };
    });

    setLines(newLines.filter(Boolean));
  }, [skills.length]);

  return (
    <Box
      ref={containerRef}
      sx={{
        py: 8,
        px: 2,
        position: "relative",
        height: 500,
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
        {lines.map((line, i) => (
          <line
            key={i}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke="#1976d2"
            strokeWidth="2"
          />
        ))}
      </svg>

      {/* Central Node */}
      <Box
        ref={centerRef}
        sx={{
          position: "absolute",
          top: "40%",
          left: "40%",
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
      {skills.map((skill, index) => (
        <Box
          key={index}
          id={`skill-${index}`}
          sx={{
            position: "absolute",
            top: skill.top,
            left: skill.left,
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            zIndex: 2,
          }}
        >
          <Tooltip title={skill.name} arrow>
          <Avatar
            src={skill.src}
            alt={skill.name}
            sx={{ width: 60, height: 60, border: "2px solid #1976d2" }}
          />
          </Tooltip>
        </Box>
      ))}
    </Box>
  );
}
