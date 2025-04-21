import React from "react";

import hexVector from "../assets/Icon/devicon_Vector.png";
import flutterIcon from "../assets/Icon/devicon_flutter.png";
import dartIcon from "../assets/Icon/devicon_dart.png";
import reactIcon from "../assets/Icon/devicon_react.png";
import kotlinIcon from "../assets/Icon/devicon_kotlin.png";
import javaIcon from "../assets/Icon/devicon_java.png";
import objcIcon from "../assets/Icon/devicon_apple.png";
import pythonIcon from "../assets/Icon/devicon_python.png";
import swiftIcon from "../assets/Icon/devicon_swift.png";

const techStack = [
  { name: "Flutter", icon: flutterIcon },
  { name: "Dart", icon: dartIcon },
  { name: "React", icon: reactIcon },
  { name: "Kotlin", icon: kotlinIcon },
  { name: "Java", icon: javaIcon },
  { name: "Objective-C", icon: objcIcon },
  { name: "Python", icon: pythonIcon },
  { name: "Swift", icon: swiftIcon },
  { name: "Swift", icon: swiftIcon },
];

const TechnologiesWeUse = () => {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-4 lg:px-0">
        <h2 className="text-3xl md:text-4xl lg:text-[45px] font-bold text-center text-[#0948FD] mb-12">
          Technologies We Use
        </h2>
        <div className="flex flex-wrap gap-28 justify-center items-center">
          {techStack.map((tech, idx) => (
            <div
              key={idx}
              className="w-32 h-36 flex flex-col items-center justify-center"
            >
              {tech.name === "Objective-C" ? (
                // Objective-C layout
                <div
                  className="relative w-full h-full bg-no-repeat bg-center bg-contain flex flex-col items-center justify-center text-xs font-medium text-black text-center"
                  style={{ backgroundImage: `url(${hexVector})` }}
                >
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-16 object-contain z-10"
                  />
                  <span className="z-10 mb-1">Objective-C</span>
                </div>
              ) : (
                // All other tech icons
                <div
                  className="relative w-full h-full bg-no-repeat bg-center bg-contain"
                  style={{ backgroundImage: `url(${hexVector})` }}
                >
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="absolute inset-0 m-auto w-16 object-contain"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesWeUse;
