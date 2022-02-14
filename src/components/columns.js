import { format } from "date-fns";

export const COLUMNS = [
  {
    Header: "Id",
    accessor: "id",
  },
  {
    Header: "First Name",
    accessor: "first_name",
  },
  {
    Header: "Last Name",
    accessor: "last_name",
  },
  {
    Header: "Date of Birth",
    accessor: "Date_of_Birth",
    Cell: ({ value }) => {
      return format(new Date(value), "dd/MM/yyyy");
    },
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Phone",
    accessor: "Mobile",
  },
];
