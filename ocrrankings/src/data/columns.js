export const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    sorter: (a,b) => a.name.localeCompare(b.name)
  },
  {
    title: "Overall",
    dataIndex: "overall",
    key: "overall",
    sorter: (a, b) => a.overall - b.overall,
  },
  {
    title: "Gender",
    dataIndex: "gender",
    key: "gender",
    sorter: (a, b) => a.gender - b.gender,
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Points",
    dataIndex: "points",
    key: "points",
    sorter: (a, b) => a.points - b.points,
  },
];
