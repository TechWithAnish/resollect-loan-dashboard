export const traceRender = (componentName) => {
    if (process.env.NODE_ENV === 'development') {
      console.time(`${componentName} render`);
      return () => console.timeEnd(`${componentName} render`);
    }
    return () => {};
  };
  
  // Usage in components:
  const stopTrace = traceRender('DataTable');
  // ... component logic
  useEffect(() => stopTrace());
  