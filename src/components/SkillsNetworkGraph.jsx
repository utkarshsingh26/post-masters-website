import React, { useRef, useEffect } from "react";
import ForceGraph2D from "react-force-graph-2d";

const skills = [
  "React",
  "Node.js",
  "Firebase",
  "TypeScript",
  "Next.js",
  "Python",
  "C++",
  "Docker",
  "AWS",
  "Git",
];

const nodes = [
  { id: "Skills", color: "#2a7de1", fontSize: 20 },
  ...skills.map((skill) => ({
    id: skill,
    color: "#64b5f6",
    fontSize: 14,
  })),
];

const links = skills.map((skill) => ({
  source: "Skills",
  target: skill,
}));

export default function SkillsNetworkGraph() {
  const fgRef = useRef();

  useEffect(() => {
    if (fgRef.current) {
      fgRef.current.zoomToFit(100);
    }
  }, []);

  return (
    <div style={{ width: "100%", height: "500px", overflow: "hidden" }}>
      <ForceGraph2D
        ref={fgRef}
        graphData={{ nodes, links }}
        enableZoomInteraction={false}
        enablePanInteraction={false}
        enableNodeDrag={false}
        nodeCanvasObject={(node, ctx) => {
          ctx.font = `${node.fontSize || 12}px Sans-Serif`;
          ctx.fillStyle = node.color || "#333";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText(node.id, node.x, node.y);
        }}
        nodePointerAreaPaint={(node, color, ctx) => {
          ctx.font = `${node.fontSize || 12}px Sans-Serif`;
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillStyle = color;
          ctx.fillText(node.id, node.x, node.y);
        }}
        linkColor={() => "#90caf9"}
        linkDirectionalParticles={2}
        linkDirectionalParticleWidth={1}
        backgroundColor="#ffffff"
      />
    </div>
  );
}
