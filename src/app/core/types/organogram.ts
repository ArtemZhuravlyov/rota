export type OrganogramResponse = {
  employeeId: string;
  employeeName: string;
  employeeAvatar: string;
  employeePosition: string;
  managerId: string;
  managerName: string;
  managerPosition: string;
}

export type OrganogramChartItem = {
  area: string;
  id: string;
  imageUrl: string;
  isLoggedUser: boolean;
  name: string;
  office: string;
  parentId: string;
  positionName: string;
  profileUrl: string;
  size: string;
  tags: string;
  initials: string;
}

/*area: "Corporate"
id: "O-6212"
imageUrl: "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg"
isLoggedUser: "false"
name: "Mayumi Ohno"
office: "CEO office"
parentId: "O-6106"
positionName: "Senior developer"
profileUrl: "http://example.com/employee/profile"
size: ""
tags: "Ceo,tag1, tag2"*/
