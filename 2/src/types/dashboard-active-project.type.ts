export type DashboardActiveProject = {
  id: number;
  type: "ontrack" | "inprogress" | "review";
  description: string;
  heading: string;
  procent: number;
  timeToEnd: string;  
}