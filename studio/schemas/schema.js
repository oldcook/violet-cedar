// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Import user defined schema types
import config from './config.js';
import doc_sections from './doc_sections.js';
import docs from './docs.js';
import advanced from './advanced.js';
import blog from './blog.js';
import page from './page.js';
import post from './post.js';
import section_content from './section_content.js';
import section_cta from './section_cta.js';
import section_docs from './section_docs.js';
import section_grid from './section_grid.js';
import section_hero from './section_hero.js';
import grid_item from './grid_item.js';
import action from './action.js';
import action_menu from './action_menu.js';
import palette from './palette.js';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    config,
    doc_sections,
    docs,
    advanced,
    blog,
    page,
    post,
    section_content,
    section_cta,
    section_docs,
    section_grid,
    section_hero,
    grid_item,
    action,
    action_menu,
    palette
    ])
})
