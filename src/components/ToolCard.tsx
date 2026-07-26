import type { MouseEvent } from 'react';
import type { ToolItem } from '../data/tools';
import { ToolThumb } from './ToolThumb';

interface ToolCardProps {
  tool: ToolItem;
}

function CardBody({ tool }: ToolCardProps) {
  return (
    <>
      {tool.status === 'soon' && <span className="soon-badge">即将上线</span>}
      <div className="tool-thumb-wrap">
        <ToolThumb kind={tool.thumb} dimmed={tool.status === 'soon'} />
      </div>
      <div className="tool-copy">
        <div>
          <h2>{tool.name}</h2>
          <p>{tool.desc}</p>
        </div>
        <span className={tool.status === 'live' ? 'tool-button' : 'tool-button disabled'}>
          {tool.status === 'live' ? (
            <>
              进入 <span aria-hidden="true">→</span>
            </>
          ) : (
            '即将上线'
          )}
        </span>
      </div>
    </>
  );
}

export function ToolCard({ tool }: ToolCardProps) {
  const classes = `tool-card tool-card-${tool.status}`;

  if (tool.status === 'live') {
    const holdPlaceholder = (event: MouseEvent<HTMLAnchorElement>) => {
      if (tool.href === '#') {
        event.preventDefault();
      }

      event.currentTarget.blur();
    };

    return (
      <a
        className={classes}
        href={tool.href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={holdPlaceholder}
        aria-label={`进入${tool.name}`}
      >
        <CardBody tool={tool} />
      </a>
    );
  }

  return (
    <article className={classes} aria-label={`${tool.name}，即将上线`}>
      <CardBody tool={tool} />
    </article>
  );
}
