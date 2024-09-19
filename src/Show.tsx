import React, { Children, isValidElement, ReactNode } from 'react';
import { ElseProps, IfProps, ShowProps } from './Show.types';

const Show = ({ children }: ShowProps) => {
  let isConditionMet = false;

  const processedChildren = Children.map(children, (child) => {
    if (isValidElement(child)) {
      if (child.type === If && child.props.condition) {
        isConditionMet = true;
        return child;
      }
      if (child.type === Else && !isConditionMet) {
        return child;
      }
    }
    return null;
  });

  return <>{processedChildren}</>;
};

const If = ({ condition, children }: IfProps) => {
  return <>{condition && children}</>;
};

const Else = ({ children }: ElseProps) => {
  return <>{children}</>;
};

export { Show, If, Else };
