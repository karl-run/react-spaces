import * as PropTypes from "prop-types";

export enum ResizeType {
	Left = "resize-left",
	Right = "resize-right",
	Top = "resize-top",
	Bottom = "resize-bottom"
}

export enum AnchorType {
	Left = "anchor-left",
	Right = "anchor-right",
	Top = "anchor-top",
	Bottom = "anchor-bottom"
}

export const AnchorTypes = [ 
	AnchorType.Left, 
	AnchorType.Right, 
	AnchorType.Bottom, 
	AnchorType.Top 
];

export const AnchorToResizeTypeMap = {
	"anchor-left": ResizeType.Right,
	"anchor-right": ResizeType.Left,
	"anchor-bottom": ResizeType.Top,
	"anchor-top": ResizeType.Bottom
}

export enum CenterType {
	None = "none",
	Vertical = "vertical",
	HorizontalVertical = "horizontalVertical"
}

export interface IPublicProps {
	id?: string,
	className?: string,
	style?: React.CSSProperties,
	scrollable?: boolean,
	trackSize?: boolean,
	centerContent?: CenterType,
	as?: string,
	children?: React.ReactNode,
	zIndex?: number,
	onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void,
	onMouseDown?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void,
	onMouseEnter?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void,
	onMouseLeave?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void,
	onMouseMove?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void,
	onTouchStart?: (event: React.TouchEvent<HTMLElement>) => void,
	onTouchMove?: (event: React.TouchEvent<HTMLElement>) => void,
	onTouchEnd?: (event: React.TouchEvent<HTMLElement>) => void
}

export const publicProps = {
	id: PropTypes.string,
	className: PropTypes.string,
	style: PropTypes.oneOfType([ PropTypes.object, PropTypes.array ]),
	scrollable: PropTypes.bool,
	trackSize: PropTypes.bool,
	centerContent: PropTypes.oneOf([ CenterType.None, CenterType.Vertical, CenterType.HorizontalVertical ]),
	as: PropTypes.string,
	zIndex: PropTypes.number,
	onClick: PropTypes.func,
	onMouseDown: PropTypes.func,
	onMouseEnter: PropTypes.func,
	onMouseLeave: PropTypes.func,
	onMouseMove: PropTypes.func,
	onTouchStart: PropTypes.func,
	onTouchMove: PropTypes.func,
	onTouchEnd: PropTypes.func
}

export interface IPrivateProps {
	anchorSize?: string | number,
	anchor?: AnchorType,
	resizable?: boolean,
	order?: number
}

export const privateProps = {
	anchorSize: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
	anchor: PropTypes.oneOf([ AnchorType.Bottom, AnchorType.Left, AnchorType.Right, AnchorType.Top ]),
	resizable: PropTypes.bool,
	order: PropTypes.number,
	topMost: PropTypes.bool
}

export interface IAnchoredProps {
	size: number | string,
	order?: number
}

export const anchoredProps = {
	size: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]).isRequired,
	order: PropTypes.number
}

export interface IResizableProps {
	handleSize?: number,
	overlayHandle?: boolean,
	minimumSize?: number,
	maximumSize?: number,
	onResizeStart?: () => void,
	onResizeEnd?: (newSize: number) => void
}

export const resizableProps = {
	handleSize: PropTypes.number,
	overlayHandle: PropTypes.bool,
	minimumSize: PropTypes.number,
	maximumSize: PropTypes.number,
	onResizeStart: PropTypes.func,
	onResizeEnd: PropTypes.func
}

export interface IPositionedProps {
	left?: string | number,
	top?: string | number,
	right?: string | number,
	bottom?: string | number,
	width?: string | number,
	height?: string | number,
	resizable?: boolean
}

export const positionedProps = {
	left: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
	top: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
	right: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
	bottom: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
	width: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
	height: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
	resizable: PropTypes.bool
}

export type AllProps = IPublicProps & IPrivateProps & IResizableProps & IPositionedProps;

export const allProps = { ...publicProps, ...privateProps, ...resizableProps, ...positionedProps };

export interface IState {
	id: string,
	children: ISpace[]
}

export interface ISize {
	width: number,
	height: number
}

export interface ISpace {
	id: string,
	adjustedLeft: number,
	adjustedTop: number,
	order: number,
	zIndex: number,
	anchorType: AnchorType | undefined,
	anchorSize: number | string,
	adjustedSize: number,
	left?: number | string,
	top?: number | string,
	right?: number | string,
	bottom?: number | string,
	width?: number | string,
	height?: number | string,
}

export interface ISpaceInfo {
	width: number,
	height: number
}