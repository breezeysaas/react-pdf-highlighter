import React, { Component, SyntheticEvent } from "react";

import { Rnd } from "react-rnd";

import "../style/AreaHighlight.css";

import { T_LTWH, T_ViewportHighlight } from "../types";

interface Props {
  highlight: T_ViewportHighlight;
  onChange: (rect: T_LTWH) => void;
  isScrolledTo: boolean;
  disableEdit?: boolean;
}

class AreaHighlight extends Component<Props> {
  render() {
    const { highlight, onChange, isScrolledTo, disableEdit, ...otherProps } =
      this.props;

    return (
      <div
        className={`AreaHighlight ${
          isScrolledTo ? "AreaHighlight--scrolledTo" : ""
        }`}
      >
        <Rnd
          enableResizing={!disableEdit}
          disableDragging={disableEdit}
          className="AreaHighlight__part"
          onDragStop={(_, data) => {
            const boundingRect = {
              ...highlight.position.boundingRect,
              top: data.y,
              left: data.x,
            };

            onChange(boundingRect);
          }}
          onResizeStop={(_, direction, ref, delta, position) => {
            const boundingRect = {
              top: position.y,
              left: position.x,
              width: ref.offsetWidth,
              height: ref.offsetHeight,
            };

            onChange(boundingRect);
          }}
          position={{
            x: highlight.position.boundingRect.left,
            y: highlight.position.boundingRect.top,
          }}
          size={{
            width: highlight.position.boundingRect.width,
            height: highlight.position.boundingRect.height,
          }}
          onClick={(event: SyntheticEvent) => {
            event.stopPropagation();
            event.preventDefault();
          }}
          {...otherProps}
        />
      </div>
    );
  }
}

export default AreaHighlight;
