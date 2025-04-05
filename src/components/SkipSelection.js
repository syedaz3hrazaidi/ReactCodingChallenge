import React, { useState, useEffect } from "react";

const SkipSelection = () => {
  const [skipOptions, setSkipOptions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiData = [
    {"id":11554,"size":4,"hire_period_days":14,"transport_cost":null,"per_tonne_cost":null,"price_before_vat":311,"vat":20,"postcode":"NR32","area":null,"forbidden":false,"created_at":"2021-04-06T17:04:42","updated_at":"2024-04-02T09:22:38","allowed_on_road":true,"allows_heavy_waste":true},{"id":11555,"size":6,"hire_period_days":14,"transport_cost":null,"per_tonne_cost":null,"price_before_vat":342,"vat":20,"postcode":"NR32","area":null,"forbidden":false,"created_at":"2021-04-06T17:04:42","updated_at":"2024-04-02T09:22:38","allowed_on_road":true,"allows_heavy_waste":true},{"id":11556,"size":8,"hire_period_days":14,"transport_cost":null,"per_tonne_cost":null,"price_before_vat":420,"vat":20,"postcode":"NR32","area":null,"forbidden":false,"created_at":"2021-04-06T17:04:42","updated_at":"2024-04-02T09:22:38","allowed_on_road":true,"allows_heavy_waste":true},{"id":11557,"size":10,"hire_period_days":14,"transport_cost":null,"per_tonne_cost":null,"price_before_vat":448,"vat":20,"postcode":"NR32","area":null,"forbidden":false,"created_at":"2021-04-06T17:04:42","updated_at":"2024-04-02T09:22:38","allowed_on_road":false,"allows_heavy_waste":false},{"id":11558,"size":12,"hire_period_days":14,"transport_cost":null,"per_tonne_cost":null,"price_before_vat":491,"vat":20,"postcode":"NR32","area":null,"forbidden":false,"created_at":"2021-04-06T17:04:42","updated_at":"2024-04-02T09:22:38","allowed_on_road":false,"allows_heavy_waste":false},{"id":11559,"size":14,"hire_period_days":14,"transport_cost":null,"per_tonne_cost":null,"price_before_vat":527,"vat":20,"postcode":"NR32","area":null,"forbidden":false,"created_at":"2021-04-06T17:04:42","updated_at":"2024-04-02T09:22:38","allowed_on_road":false,"allows_heavy_waste":false},{"id":11560,"size":16,"hire_period_days":14,"transport_cost":null,"per_tonne_cost":null,"price_before_vat":556,"vat":20,"postcode":"NR32","area":null,"forbidden":false,"created_at":"2021-04-06T17:04:42","updated_at":"2024-04-02T09:22:38","allowed_on_road":false,"allows_heavy_waste":false},{"id":11561,"size":20,"hire_period_days":14,"transport_cost":236,"per_tonne_cost":236,"price_before_vat":944,"vat":20,"postcode":"NR32","area":null,"forbidden":false,"created_at":"2021-04-06T17:04:42","updated_at":"2024-04-02T09:22:38","allowed_on_road":false,"allows_heavy_waste":true},{"id":11562,"size":40,"hire_period_days":14,"transport_cost":236,"per_tonne_cost":236,"price_before_vat":944,"vat":20,"postcode":"NR32","area":null,"forbidden":false,"created_at":"2021-04-06T17:04:42","updated_at":"2024-04-02T09:22:38","allowed_on_road":false,"allows_heavy_waste":false}
    ];

    const transformedData = apiData.map(skip => ({
      size: skip.size,
      hirePeriod: `${skip.hire_period_days} days`,
      price: skip.price_before_vat,
      image: `/images/skip-img.jpeg`,
      privateOnly: !skip.allowed_on_road,
      notForHeavyWaste: !skip.allows_heavy_waste
    }));

    setSkipOptions(transformedData);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Choose Your Skip Size
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Select the perfect skip size for your project needs
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {skipOptions.map((skip) => (
          <div 
            key={skip.id}
            className="group relative rounded-xl overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800 border-2 border-transparent hover:border-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            {/* Image with overlay */}
            <div className="relative h-48 overflow-hidden">
              <img 
                src={skip.image || "https://images.unsplash.com/photo-1590496793929-36417d3117de?q=80&w=800"} 
                alt={`${skip.size} Yard Skip`} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              
              {/* Size badge */}
              <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg z-10">
                {skip.size} YARDS
              </div>
            </div>
  {/* Warning badges */}
  <div className="absolute top-40 left-4 right-4 flex flex-wrap gap-2 z-10">
              {skip.privateOnly && (
                <div className="bg-red-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                  <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                  </svg>
                  PRIVATE ONLY
                </div>
              )}
              {skip.notForHeavyWaste && (
                <div className="bg-amber-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                  <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                  </svg>
                  NO HEAVY WASTE
                </div>
              )}
            </div>

            {/* Card content */}
            <div className="px-4 py-4">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold text-white normal-case mb-3">
                  {skip.size} Yard Skip
                </h3>
              </div>
              
              <div className="flex items-center text-gray-300 mb-3">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                <span className="text-sm">{skip.hirePeriod} hire</span>
              </div>
              
              {skip.transportCost && (
                <div className="text-xs text-blue-300 mb-3">
                  + £{skip.transportCost} transport
                </div>
              )}

              <div className="flex justify-between items-center mb-4">
              <div className="text-3xl font-bold text-[#0037C1] mb-1">
                £{skip.price} 
                <span className="text-base font-medium text-white ml-1">per week</span>
              </div>
            
              </div>
              
              <button className="w-full flex items-center justify-between bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white py-3 px-5 rounded-lg transition-all">
                <span className="font-medium">Select Skip</span>
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkipSelection;
