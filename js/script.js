// Enable line breaks with returns (GitHub-flavored markdown)
marked.setOptions({
    breaks: true
  });

// Default markdown text shown when app loads
const defaultMarkdown = `
# Heading

## Sub-heading

Live Page 👇
🔗 [Markdown Previewer](https://sawpaingchitmin.github.io/markdown_previewer/)

\`Inline code\`

\`\`\`
    function greeting() {
        return "Hello, world!";
    }
\`\`\`

- Write greeting function
- Return "Hello, world!"

> **"The best way to learn React is to use it. There are no shortcuts."**
> — Dan Abramov

![React Logo](https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg)


`;

// React component for the markdown previewer
function MarkdownPreviewer() {
    // markdown is the current value, setMarkdown changes it
    const [markdown, setMarkdown] = React.useState(defaultMarkdown);

    // Update state when user types in the editor
    const handleChange = (e) => {
        setMarkdown(e.target.value);
    };

    return (
        <div className="container">
            {/* Markdown editor box */}
            <div className="box">
            {/* Markdown editor title bar */}
            <div className="title-bar">Editor</div>
            <textarea id="editor" value={markdown} onChange={handleChange} /> </div>

            {/* Markdown preview box */}
            <div className="box">
            {/* Markdown preview title bar */}
            <div className="title-bar">Previewer</div>
            {/* Convert markdown to HTML and insert into preview */}
            <div id="preview" dangerouslySetInnerHTML={{ __html: marked.parse(markdown) }} /> </div>
        </div>
    );
}

// Render the React component inside the #app div
ReactDOM.createRoot(document.getElementById("app")).render(<MarkdownPreviewer />);