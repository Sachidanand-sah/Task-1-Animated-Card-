import React, { useState } from 'react';
import { motion } from 'framer-motion';

const cardData = [
  { title: "Card 1", description: "First amazing card", boxes: [{ title: "Box 1", content: "Content 1" }, { title: "Box 2", content: "Content 2" }] },
  { title: "Card 2", description: "Second awesome card", boxes: [{ title: "Box 1", content: "Content 1" }] },
  { title: "Card 3", description: "Third incredible card", boxes: [{ title: "Box 1", content: "Content 1" }, { title: "Box 2", content: "Content 2" }, { title: "Box 3", content: "Content 3" }] },
  { title: "Card 4", description: "Fourth fantastic card", boxes: [{ title: "Box 1", content: "Content 1" }] },
  { title: "Card 5", description: "Fifth spectacular card", boxes: [{ title: "Box 1", content: "Content 1" }, { title: "Box 2", content: "Content 2" }] }
];

const AnimatedCards = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center p-6 overflow-hidden">
      <div className="flex flex-col gap-6">
        {cardData.map((card, index) => (
          <motion.div 
            key={index}
            className="w-96 bg-white/20 backdrop-blur-lg rounded-2xl shadow-xl cursor-pointer"
            initial={{ y: 20 }}
            animate={{ 
              y: hoveredCard === index ? -20 : 20,
              scale: hoveredCard === index ? 1.05 : 1
            }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 10 
            }}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="p-6 text-white">
              <h2 className="text-2xl font-bold mb-4">{card.title}</h2>
              <p>{card.description}</p>
              <div className="mt-4 grid grid-cols-1 gap-4">
                {card.boxes.map((box, boxIndex) => (
                  <div key={boxIndex} className="bg-white/10 backdrop-blur-lg rounded-lg p-4">
                    <h3 className="text-lg font-bold mb-2">{box.title}</h3>
                    <p>{box.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCards;
