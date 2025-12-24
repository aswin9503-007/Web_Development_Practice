
function ChildComponent({ data }) {
    return (
        <div>
            {data}
            <div>I'm a Child Component</div>
        </div>
    );
}
function ParentComponent() {
    const data = "I'm a parent component";
    return (
        <ChildComponent data={data} />
    );
}
function PropsBasedComposition() {
    return (
        <ParentComponent />
    );
}
export default PropsBasedComposition;