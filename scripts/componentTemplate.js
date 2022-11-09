// component.tsx
exports.component = name => `import React from 'react';
import './${name}.scss';
export interface I${name}Props {}
const ${name} = ({}: ${name}Props) => {
  return <div>Hola mundo</div>;
};
export default ${name};
`;
