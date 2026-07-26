import { tools } from '../data/tools';
import { ToolCard } from './ToolCard';

export function ToolGrid() {
  return (
    <section className="tools-section" aria-label="材料科学工具">
      <div className="tool-grid">
        {tools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </section>
  );
}
