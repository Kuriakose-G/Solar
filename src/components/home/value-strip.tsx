import { FaHandHoldingUsd, FaAward, FaChartLine, FaUsers } from 'react-icons/fa';

export default function ValueStrip() {
  return (
    <section className="bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
          <div className="flex flex-col items-center">
            <FaHandHoldingUsd className="text-green-400 text-5xl mb-3" />
            <h3 className="text-3xl font-bold text-white">£0 Upfront</h3>
            <p className="text-gray-400">with our financing options</p>
          </div>
          <div className="flex flex-col items-center">
            <FaAward className="text-green-400 text-5xl mb-3" />
            <h3 className="text-3xl font-bold text-white">25+ Years</h3>
            <p className="text-gray-400">of panel lifespan</p>
          </div>
          <div className="flex flex-col items-center">
            <FaChartLine className="text-green-400 text-5xl mb-3" />
            <h3 className="text-3xl font-bold text-white">Save 70%</h3>
            <p className="text-gray-400">on your energy bills</p>
          </div>
          <div className="flex flex-col items-center">
            <FaUsers className="text-green-400 text-5xl mb-3" />
            <h3 className="text-3xl font-bold text-white">10,000+</h3>
            <p className="text-gray-400">happy customers</p>
          </div>
        </div>
      </div>
    </section>
  );
}
