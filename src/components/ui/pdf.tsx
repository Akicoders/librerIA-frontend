import { Chat } from './Chat';
import { useState, useEffect } from 'react';
import { Viewer, Worker,Button, Position,  Tooltip } from '@react-pdf-viewer/core';
import { fullScreenPlugin } from '@react-pdf-viewer/full-screen';
import { localeSwitcherPlugin } from '@react-pdf-viewer/locale-switcher';
import { toolbarPlugin } from '@react-pdf-viewer/toolbar';
import type { ToolbarSlot, TransformToolbarSlot } from '@react-pdf-viewer/toolbar';
import {
    highlightPlugin,
    HighlightArea,
    MessageIcon,
    RenderHighlightContentProps,
    RenderHighlightsProps,
    RenderHighlightTargetProps,
} from '@react-pdf-viewer/highlight';
import '@react-pdf-viewer/toolbar/lib/styles/index.css';
import '@react-pdf-viewer/full-screen/lib/styles/index.css';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import '@react-pdf-viewer/highlight/lib/styles/index.css';
import './pdf.css';
import * as React from 'react';

import { Notebook, NotebookText } from 'lucide-react';

interface fileUrl{
    url: string;
}

interface Note {
    id: number;
    content: string;
    highlightAreas: HighlightArea[];
    quote: string;
}


export default function Pdf( { url } : fileUrl) {
    const toolbarPluginInstance = toolbarPlugin();
    const fullScreenPluginInstance = fullScreenPlugin();
    const localeSwitcherPluginInstance = localeSwitcherPlugin();
    const { renderDefaultToolbar, Toolbar } = toolbarPluginInstance;
    const transform: TransformToolbarSlot = (slot: ToolbarSlot) => ({
        ...slot,
        Download: () => <></>,
        DownloadMenuItem: () => <></>,
        OpenMenuItem: () => <></>,
        Open: () => <></>,
        SwitchTheme: () => <></>,
        SwitchScrollModeMenuItem: () => <></>,
    });
    const [expanded, setExpanded] = useState(false);

    const toggleNotes = () => {
        setExpanded(!expanded);
    };

    const [message, setMessage] = React.useState('');
    const [notes, setNotes] = React.useState<Note[]>([]);

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes));
    }, [notes]);



    let noteId = notes.length;

    const noteEles: Map<number, HTMLElement> = new Map();

    const renderHighlightTarget = (props: RenderHighlightTargetProps) => (
        <div
            style={{
                background: '#eee',
                display:'flex',
                position: 'absolute',
                left: `${props.selectionRegion.left}%`,
                top: `${props.selectionRegion.top + props.selectionRegion.height}%`,
                transform: 'translate(0, 0px)',
                zIndex: 1000, //Le pongo esto para que se sobreponga pero cuando selecciona una parte del pdf esta a nivel del z-index de la pagina
            }}
        >
            <Tooltip 
                position={Position.TopCenter}
                target={
                    <Button  onClick={props.toggle}  className='animated-button'  >
                        <MessageIcon  />
                    </Button>
                }
                content={() => 
                <div  style={{ width: 'fit-content' ,  fontSize: '.75rem' , padding: '2px' }}>
                    Añadir nota
                </div>
            }
                offset={{ left: 0, top: -8 }}
            />
        </div>
    );

    const renderHighlightContent = (props: RenderHighlightContentProps) => {
        const addNote = () => {
            if (message !== '') {
                const note: Note = {
                    id: ++noteId,
                    content: message,
                    highlightAreas: props.highlightAreas,
                    quote: props.selectedText,
                };
                setNotes(notes.concat([note]));
                props.cancel();
            }
        };

        return (
            <div
                style={{
                    background: '#fff',
                    borderRadius: '2px',
                    display:'flex',
                    paddingLeft: '8px',
                    gap: '8px',
                    position: 'absolute',
                    left: `${props.selectionRegion.left + props.selectionRegion.width}%`,
                    top: `${props.selectionRegion.top   }%`,
                    zIndex: 100,
                }}
            >
                <div>
                    <textarea
                        rows={3}
                        style={{
                            border: '1px solid rgba(0, 0, 0, .3)',
                        }}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                if (e.shiftKey) {
                                    // Allow new line when Shift + Enter is pressed
                                    return;
                                } else {
                                    e.preventDefault(); // Prevents the default newline behavior
                                    addNote(); // Call the addNote function
                                }
                            }
                        }}
                        placeholder="Escribe tu nota"
                    ></textarea>
                </div>
                <div
                    style={{
                        display: 'flex',
                        marginTop: '0px',
                    }}
                >
                </div>
            </div>
        );
    };

    const jumpToNote = (note: Note) => {
        if (noteEles.has(note.id)) {
            const element = noteEles.get(note.id);
            if (element) { 
                element.scrollIntoView();
            }
        }
    };

    const renderHighlights = (props: RenderHighlightsProps) => (
        <div>
            {notes.map((note) => (
                <React.Fragment key={note.id}>
                    {note.highlightAreas
                        .filter((area) => area.pageIndex === props.pageIndex)
                        .map((area, idx) => (
                            <div
                                key={idx}
                                style={Object.assign(
                                    {},
                                    {
                                        background: 'yellow',
                                        opacity: 0.4,
                                    },
                                    props.getCssProperties(area, props.rotation)
                                )}
                                onClick={() => jumpToNote(note)}
                                ref={(ref): void => {
                                    noteEles.set(note.id, ref as HTMLElement);
                                }}
                            />
                        ))}
                </React.Fragment>
            ))}
        </div>
    );

    const highlightPluginInstance = highlightPlugin({
        renderHighlightTarget,
        renderHighlightContent,
        renderHighlights,
    });

    const { jumpToHighlightArea } = highlightPluginInstance;



    return (
            <div className='flex flex-col w-full h-full justify-between  md:flex-row md:w-full '>
            <div className="flex p-1 w-full ">                
            <Worker workerUrl={"https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js"}>  
               <div className='flex  p-2 flex-row w-full'>
                <div className='flex bg-white text-black flex-col w-fit max-w-80  p-2 border-r-2 '>
                {notes.length === 0 && <div style={{ textAlign: 'center'}}> Agrega notas </div>}
                {notes.length > 0 && 
                <div className="button-container">
                <button className="animated-button" onClick={toggleNotes}>
                {expanded ? <NotebookText style={{ color: 'white' }} /> : <Notebook style={{ color: 'white' }} />}
                </button>
                </div>}
                {notes.map((note) => {
                    return (
                        <div>

                        {expanded && (
                            <div
                            key={note.id}
                            style={{
                                borderBottom: '1px solid rgba(0, 0, 0, .3)',
                                cursor: 'pointer',
                                display: 'flex',
                                flexDirection: 'column',
                                maxWidth: '100%',
                                padding: '8px',
                                fontSize: '.75rem',
                            }}
                            // Jump to the associated highlight area
                            onClick={() => jumpToHighlightArea(note.highlightAreas[0])}
                        >

                            <blockquote
                                style={{
                                    borderLeft: '2px solid rgba(0, 0, 0, 0.2)',
                                    fontSize: '.75rem',
                                    lineHeight: 1.5,
                                    margin: '0 0 8px 0',
                                    paddingLeft: '8px',
                                    display: 'flex',
                                    textAlign: 'justify',
                                    overflowWrap: 'break-word',
                                    wordWrap: 'break-word',
                                    whiteSpace: 'normal',
                                    maxWidth: '100%',
                                }}
                                >
                                {note.quote}
                            </blockquote>
                            <p style={{width: '100%', wordWrap: 'break-word', overflowWrap: 'break-word', whiteSpace: 'normal', margin: '10px'}}>
                                {note.content}
                            </p>

                        </div>
                        )}
                        </div>
                    )})
                }
                    </div>
                   <div className='w-full max-w-full  h-[96vh] overflow-hidden  bg-white' >
                    
                   <Toolbar >{renderDefaultToolbar(transform)}</Toolbar>
                       <Viewer  
                           fileUrl={url}
                           plugins={[toolbarPluginInstance, fullScreenPluginInstance, localeSwitcherPluginInstance, highlightPluginInstance]}
                       />
                   </div>

               </div>
            </Worker>
            </div>
            <div className="w-full flex p-2 md:w-fit ">
               <Chat />
            </div>
            </div>
 
    );



}