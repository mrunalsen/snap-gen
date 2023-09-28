import {
    CodeToggle,
    CreateLink,
    InsertThematicBreak,
    ListsToggle,
    MDXEditor,
    Separator,
    headingsPlugin,
    linkDialogPlugin,
    linkPlugin,
    listsPlugin,
    quotePlugin,
    thematicBreakPlugin,
} from '@mdxeditor/editor';
import { toolbarPlugin } from '@mdxeditor/editor/plugins/toolbar';
import { BoldItalicUnderlineToggles } from '@mdxeditor/editor/plugins/toolbar/components/BoldItalicUnderlineToggles';
import { UndoRedo } from '@mdxeditor/editor/plugins/toolbar/components/UndoRedo';
import '@mdxeditor/editor/style.css';
import React, { forwardRef } from 'react';

const MDXEditorComponent = forwardRef(({ value }, containerRef) => {

    return (
        <MDXEditor
            ref={containerRef}
            markdown={value}
            className=''
            plugins={[
                headingsPlugin(),
                listsPlugin(),
                quotePlugin(),
                thematicBreakPlugin(),
                linkPlugin(),
                linkDialogPlugin(),
                listsPlugin(),
                toolbarPlugin({
                    toolbarContents: () => (
                        <div className={`flex rounded`}>
                            <UndoRedo />
                            <Separator />
                            <BoldItalicUnderlineToggles />
                            <Separator />
                            <InsertThematicBreak />
                            <CodeToggle />
                            <CreateLink />
                            <ListsToggle />
                        </div>
                    ),
                }),
            ]}
        />
    );
});

export default MDXEditorComponent;
