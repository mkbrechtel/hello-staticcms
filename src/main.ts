import CMS from '@staticcms/core';
import '@staticcms/core/dist/main.css';
import YAML from 'yaml';

// fetch /config.yaml and parse
fetch('/config.yaml').then((res) => res.text()).then((yaml) => {
  const config = YAML.parse(yaml);
  console.log(config);
});