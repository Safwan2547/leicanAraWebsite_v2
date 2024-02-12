function Watcher() {
    const observeHandler = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                console.log("Intersection: "+entry.target.id);
            }
        });
    };
    
    let observer = new IntersectionObserver(observeHandler, { root: null });
    
    let els = Array.from(document.getElementsByTagName("img"));
    
    els.forEach((el) => {
        observer.observe(el);
    });
}

export default Watcher;
