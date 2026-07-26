import { features } from '../data/features';
import { FeatureIcon } from './Icons';

export function FeatureStrip() {
  return (
    <section className="feature-strip" aria-label="平台特性">
      {features.map((feature) => (
        <div className="feature-item" key={feature.title} style={{ color: feature.color }}>
          <FeatureIcon name={feature.icon} className="feature-icon" />
          <div>
            <h2>{feature.title}</h2>
            <p>{feature.desc}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
