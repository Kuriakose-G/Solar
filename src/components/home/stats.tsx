import React from 'react';

const Stats = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Impact in Numbers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-5xl font-bold text-primary">1.2M</p>
            <p className="text-muted-foreground">Tonnes of CO2 Saved</p>
          </div>
          <div>
            <p className="text-5xl font-bold text-primary">500MW</p>
            <p className="text-muted-foreground">of Solar Power Installed</p>
          </div>
          <div>
            <p className="text-5xl font-bold text-primary">20,000+</p>
            <p className="text-muted-foreground">Homes Powered by Solar</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
