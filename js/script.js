marked.setOptions({
    breaks: true
  });

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

function MarkdownPreviewer() {
    // this means: start with "defaultMarkdown", and let me update it anytime using setMarkdown
    const [markdown, setMarkdown] = React.useState(defaultMarkdown);

    const handleChange = (e) => {
        setMarkdown(e.target.value);
    };

    return (
        <div className="container">
            <div className="box">
            <div className="title-bar">Editor</div>
            <textarea id="editor" value={markdown} onChange={handleChange} /> </div>

            <div className="box">
            <div className="title-bar">Previewer</div>

            <div id="preview" dangerouslySetInnerHTML={{ __html: marked.parse(markdown) }} /> </div>
        </div>
    );
}

ReactDOM.createRoot(document.getElementById("app")).render(<MarkdownPreviewer />);