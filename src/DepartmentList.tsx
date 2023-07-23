import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import styles from './DepartmentList.module.css';

interface SubDepartment {
  name: string;
}

interface Department {
  name: string;
  subDepartments: SubDepartment[];
}

interface DepartmentListProps {
  departments: Department[];
}

const DepartmentList: React.FC<DepartmentListProps> = ({ departments }) => {
  const [expandedDepartments, setExpandedDepartments] = useState<string[]>([]);
  const [selectedDepartments, setSelectedDepartments] = useState<string[]>([]);

  const handleDepartmentClick = (departmentName: string) => {
    setExpandedDepartments((prevExpanded) =>
      prevExpanded.includes(departmentName)
        ? prevExpanded.filter((name) => name !== departmentName)
        : [...prevExpanded, departmentName]
    );
  };

  const handleSubDepartmentClick = (departmentName: string, subDepartmentName: string) => {
    setSelectedDepartments((prevSelected) => {
      const isSelected = prevSelected.includes(subDepartmentName);
      if (isSelected) {
        return prevSelected.filter((name) => name !== subDepartmentName);
      } else {
        const subDepartments = departments.find((department) => department.name === departmentName)?.subDepartments;
        const allSubDepartmentsSelected =
          subDepartments?.every((subDepartment) => prevSelected.includes(subDepartment.name)) || false;
        return allSubDepartmentsSelected
          ? prevSelected.filter((name) => !subDepartments?.some((subDepartment) => subDepartment.name === name))
          : [...prevSelected, subDepartmentName];
      }
    });
  };

  return (
    <List>
      {departments.map((department) => (
        <React.Fragment key={department.name}>
          <ListItem
            button
            className={styles.listItem}
            onClick={() => handleDepartmentClick(department.name)}
          >
            <ListItemText primary={department.name} />
            {expandedDepartments.includes(department.name) ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          {department.subDepartments.length > 0 && (
            <Collapse in={expandedDepartments.includes(department.name)} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {department.subDepartments.map((subDepartment) => (
                  <ListItem
                    key={subDepartment.name}
                    button
                    className={styles.subDepartmentItem}
                    onClick={() => handleSubDepartmentClick(department.name, subDepartment.name)}
                    selected={selectedDepartments.includes(subDepartment.name)}
                  >
                    <ListItemText primary={subDepartment.name} />
                  </ListItem>
                ))}
              </List>
            </Collapse>
          )}
        </React.Fragment>
      ))}
    </List>
  );
};

export default DepartmentList;
