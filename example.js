
const nodes = [
    { id: 1, label: 'Node 1', group: 2 },
    { id: 2, label: 'Node 2', group: 3 },
    { id: 3, label: 'Node 3', group: 1 },
    { id: 4, label: 'Node 4', group: 1 },
    { id: 5, label: 'Node 5', group: 1 },
    { id: 6, label: 'Node 6', group: 3 },
    { id: 7, label: 'Node 7', group: 3 },
    { id: 8, label: 'Node 8', group: 1 },
    { id: 9, label: 'Node 9', group: 2 },
    { id: 10, label: 'Node 10', group: 3 }
];

const edges = [
    {  from: 1, to: 2, label: '1-2' },
    // {  from: 2, to: 1, label: '2-1' },
    {  from: 1, to: 3, label: '1-3' },
    // {  from: 3, to: 1, label: '3-1' },
    {  from: 1, to: 4, label: '1-4' },
    // {  from: 4, to: 1, label: '4-1' },
    {  from: 2, to: 5, label: '2-5' },
    // {  from: 5, to: 2, label: '5-2' },
    {  from: 5, to: 6, label: '5-6' },
    // {  from: 6, to: 5, label: '6-5' },
    {  from: 3, to: 7, label: '3-7' },
    // {  from: 7, to: 3, label: '7-3' },
    {  from: 7, to: 8, label: '7-8' },
    // {  from: 8, to: 7, label: '8-7' },
    {  from: 8, to: 9, label: '8-9' },
    // {  from: 9, to: 8, label: '9-8' },
    {  from: 5, to: 10, label: '5-10' },
    // {  from: 10, to: 5, label: '10-5' },
    {  from: 10, to: 9, label: '10-9' },
    // {  from: 9, to: 10, label: '9-10' }
];
  


export {
    nodes,
    edges
}