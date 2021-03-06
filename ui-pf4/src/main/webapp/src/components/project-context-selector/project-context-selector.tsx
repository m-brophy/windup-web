import React, { useEffect, useState } from "react";

import { ContextSelector, ContextSelectorItem } from "@patternfly/react-core";
import { Project } from "models/api";

export interface ProjectContextSelectorProps {
  projects: Project[];
  selectedProject?: Project;
  onSelectProject: (project: Project) => void;
}

export const ProjectContextSelector: React.FC<ProjectContextSelectorProps> = ({
  projects,
  selectedProject,
  onSelectProject,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [filteredItems, setFilteredItems] = useState<Project[]>(projects);

  useEffect(() => {
    setFilteredItems(projects);
  }, [projects]);

  const onSelect = (_: any, value: any) => {
    const selectedProject = projects.find(
      (f) => f.migrationProject.title === value
    );

    setIsOpen((current) => !current);
    onSelectProject(selectedProject!);
  };

  const onToggle = (_: any, isOpen: boolean) => {
    setIsOpen(isOpen);
  };

  const onSearchInputChange = (value: string) => {
    setSearchValue(value);

    const filtered =
      value === ""
        ? projects
        : projects.filter(
            (str) =>
              str.migrationProject.title
                .toLowerCase()
                .indexOf(value.toLowerCase()) !== -1
          );

    setFilteredItems(filtered || []);
  };

  const onSearchButtonClick = () => {
    const filtered =
      searchValue === ""
        ? projects
        : projects.filter(
            (str) =>
              str.migrationProject.title
                .toLowerCase()
                .indexOf(searchValue.toLowerCase()) !== -1
          );

    setFilteredItems(filtered || []);
  };

  return (
    <ContextSelector
      toggleText={selectedProject?.migrationProject.title}
      onSearchInputChange={onSearchInputChange}
      isOpen={isOpen}
      searchInputValue={searchValue}
      onToggle={onToggle}
      onSelect={onSelect}
      onSearchButtonClick={onSearchButtonClick}
      screenReaderLabel="Selected Project:"
    >
      {filteredItems.map((item, index) => (
        <ContextSelectorItem key={index}>
          {item.migrationProject.title}
        </ContextSelectorItem>
      ))}
    </ContextSelector>
  );
};
