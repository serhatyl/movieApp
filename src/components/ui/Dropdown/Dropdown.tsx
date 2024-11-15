import React, {useEffect, useRef, useState} from 'react';

interface DropdownProps extends React.HTMLProps<HTMLSelectElement> {
  labelContent: React.ReactNode;
  children: React.ReactNode;
  useNativeComponent?: boolean;
}

const Dropdown = (props: DropdownProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [childrenVisible, setChildrenVisible] = useState<boolean>(false);
  const {labelContent, children, useNativeComponent, ...selectProps} = props;

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setChildrenVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  console.log(useNativeComponent);
  if (useNativeComponent) {
    return (
      <select id="nativeSelect" {...selectProps}>
        {children}
      </select>
    );
  }
  return (
    <div className="dropdown custom-dropdown" ref={dropdownRef}>
      <div
        onClick={() => {
          setChildrenVisible(!childrenVisible);
        }}
        aria-hidden
      >
        {labelContent}
      </div>
      {childrenVisible && <div className="dropdown-content">{children}</div>}
    </div>
  );
};

export default Dropdown;
