import { CodeToggle, CreateLink, InsertThematicBreak, ListsToggle, Separator, headingsPlugin, linkDialogPlugin, linkPlugin, listsPlugin, quotePlugin, thematicBreakPlugin } from '@mdxeditor/editor';
import { MDXEditor } from '@mdxeditor/editor/MDXEditor';
import { toolbarPlugin } from '@mdxeditor/editor/plugins/toolbar';
import { BoldItalicUnderlineToggles } from '@mdxeditor/editor/plugins/toolbar/components/BoldItalicUnderlineToggles';
import { UndoRedo } from '@mdxeditor/editor/plugins/toolbar/components/UndoRedo';
import '@mdxeditor/editor/style.css';
import DOMPurify from 'dompurify';
import React, { useRef, useState } from 'react';

const MdxEditor = () => {
    const [paraValue, setParaValue] = useState('');
    const containerref = useRef();
    console.log(containerref.current?.value);

    const format_text = (text) => {
        return text
            .replace(/(?:\*\*|__)(?:(?!\s))((?:(?!\*|\n|_|__).)+)(?:\*\*|__)/g, `<b>$1</b>`)
            .replace(/(?:\*|_)(?:(?!\s))((?:(?!\*|\n|_).)+)(?:\*|_)/g, `<i>$1</i>`)
            .replace(/(?:~)(?:(?!\s))((?:(?!\n|~).)+)(?:~)/g, '<s>$1</s>')
            .replace(/(?:--)(?:(?!\s))((?:(?!\n|--).)+)(?:--)/g, '<u>$1</u>')
            .replace(/(?:```)(?:(?!\s))((?:(?!\n|```)[\s\S])+)(?:```)/g, '<tt>$1</tt>');
    };
    const clean = DOMPurify.sanitize(format_text(paraValue));
    const markup = { __html: clean };
    return (

        <div>
            <MDXEditor
                ref={containerref}
                markdown=''
                onChange={console.log}
                plugins={[
                    headingsPlugin(), listsPlugin(), quotePlugin(), thematicBreakPlugin(), linkPlugin(), linkDialogPlugin(), listsPlugin(),
                    toolbarPlugin({
                        toolbarContents: () => (
                            <div className='flex rounded'>
                                <UndoRedo />
                                <Separator />
                                <BoldItalicUnderlineToggles />
                                <Separator />
                                <InsertThematicBreak />
                                <CodeToggle />
                                <CreateLink />
                                <ListsToggle />
                            </div>
                        )
                    })]}
                className={'bg-gray-100 container mx-auto rounded-lg'}
            />
            <button className='btn-primary bg-rose-500' onClick={() => containerref.current?.setMarkdown('')}>Clear</button>
            <button className='btn-primary' onClick={() => console.log(containerref.current?.getMarkdown())}>Log Markdown</button>
            <button className='btn-primary' onClick={() => { setParaValue(containerref.current?.getMarkdown()); }}>Set Para</button>
            <pre dangerouslySetInnerHTML={markup}></pre>
        </div>
    );
};

export default MdxEditor;