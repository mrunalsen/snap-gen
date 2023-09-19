import React, { memo } from 'react';
import { MDXEditor } from '@mdxeditor/editor/MDXEditor';

const MemoizedMDXEditor = memo((props) => {
  return (
    <MDXEditor
      markdown={props.markdown}
      onChange={props.onChange}
      id={props.id}
      name={props.name}
      disabled={props.disabled}
      plugins={props.plugins}
      contentEditableClassName="outline-0 w-full p-1 focus:bg-gray-100"
    />
  );
});

export default MemoizedMDXEditor;