import type { BrushProps, ReferenceLineProps, XAxisProps, YAxisProps } from 'recharts';
//todo: remove ref Omit once types are fixed
export interface ICartesianChartConfig {
  /**
   * Defines whether the `YAxis` should be visible.
   */
  yAxisVisible?: boolean;
  /**
   * Defines whether the `XAxis` should be visible.
   */
  xAxisVisible?: boolean;
  /**
   * Defines whether the ticks of the `YAxis` should be visible.
   */
  yAxisTicksVisible?: boolean;
  /**
   * Defines whether the labels of the `YAxis` should be visible.
   */
  yAxisLabelsVisible?: boolean;
  /**
   * Defines the width of the `YAxis`.
   */
  yAxisWidth?: number;

  gridStroke?: string;
  gridVertical?: boolean;
  gridHorizontal?: boolean;

  /**
   * Defines whether it should be possible to zoom in on the chart.
   * If this prop is applied and doesn't have a falsy value, a range slider is displayed on top of the chart, making it possible to zoom-in/zoom-out.
   *
   * __Note:__ Since v2.3.0 you can also define custom props for the internal [recharts `Brush` component](https://recharts.org/en-US/api/Brush) via the`zoomingTool` prop.
   * Please keep in mind that it's possible to override internal APIs, so please use with caution!
   */
  zoomingTool?: boolean | Partial<Omit<BrushProps, 'ref'>>;

  /**
   * Defines the gab between bars.
   */
  barGap?: number;

  /**
   * Display a second `YAxis`.
   */
  secondYAxis?: {
    dataKey: string;
    name?: string;
    color?: string;
  };
  /**
   * If this property is set, a reference line will be shown.
   * Please note that this property also allows setting all properties described [here](https://recharts.org/en-US/api/ReferenceLine), but we only recommend setting `label`,`value` and `color` to preserve the intended design.
   */
  referenceLine?: {
    value?: number;
    color?: string;
  } & Omit<ReferenceLineProps, 'ref'>;
  /**
   * Defines possible configurations for the `YAxis`.
   *
   * __Note:__ It is possible to overwrite internally used props. Please use with caution!
   */
  yAxisConfig?: Omit<YAxisProps, 'mirror'>;
  /**
   * Defines possible configurations for the `XAxis`.
   *
   * __Note:__ It is possible to overwrite internally used props. Please use with caution!
   */
  xAxisConfig?: Omit<XAxisProps, 'mirror'>;
  /**
   * Defines possible configurations for the second `YAxis`.
   *
   * __Note:__ It is possible to overwrite internally used props. Please use with caution!
   */
  secondYAxisConfig?: Omit<YAxisProps, 'mirror'>;
  /**
   * Defines possible configurations for the second `YAxis`.
   *
   * __Note:__ It is possible to overwrite internally used props. Please use with caution!
   */
  secondXAxisConfig?: Omit<XAxisProps, 'mirror'>;
}
