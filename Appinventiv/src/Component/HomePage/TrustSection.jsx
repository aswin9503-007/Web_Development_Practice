import React, { useEffect, useState } from 'react';
import { api } from '../../services/api'; 

const TrustSection = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    api.trust.get()
      .then(setData)
      .catch((err) => console.error("Trust Section Fetch Error:", err));
  }, []);

  if (!data) return null;

  return (
    <section className="trust-section">
      {/* Brand Bar - Dynamic Logos */}
      <div className="brand-bar">
        {data.logos?.map((logo, index) => (
          <React.Fragment key={logo.id || index}>
            <div className="brand-item">
              <img src={logo.image_url} alt={logo.alt_text || "Brand Logo"} />
            </div>
            {/* Divider logic: only show if not the last item */}
            {index < data.logos.length - 1 && <div className="brand-divider"></div>}
          </React.Fragment>
        ))}
      </div>

      {/* Content - Dynamic Text */}
      <div className="trust-content">
        <div className="trust-left">
          <h2>{data.content?.title}</h2>
        </div>
        <div className="trust-right">
          <p>{data.content?.description}</p>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;