import React from 'react';

const Certifications = () => {
  const certifications = [
    {
      name: "MCS Certified",
      logo: "/mcs-logo.png"
    },
    {
      name: "RECC Member",
      logo: "/recc-logo.png"
    },
    {
      name: "NICEIC Approved",
      logo: "/niceic-logo.png"
    },
    {
      name: "Tesla Powerwall Certified",
      logo: "/tesla-logo.png"
    }
  ];

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Certifications</h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="flex items-center gap-4">
              <img src={cert.logo} alt={cert.name} className="h-12" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
