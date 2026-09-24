import { tools } from '../data/tools';
import { ToolCard } from './ToolCard';

export function ToolGrid() {
  return (
    <section className="tools-section" aria-label="材料科学工具">
      <div className="tool-grid tool-grid-labs" aria-label="独立实验室">
        {tools.filter((tool) => tool.group === 'lab').map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
      <div className="tool-grid tool-grid-tools" aria-label="其他工具">
        {tools.filter((tool) => tool.group === 'tool').map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
      <p className="tools-development-note">更多功能还在开发</p>
    </section>
  );
}
