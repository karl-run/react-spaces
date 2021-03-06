import * as React from 'react';
import * as Space from 'react-spaces';
import './Layers.scss';

export const LayersDemo = () => {
	const [ fixedSideBarHovered, setFixedSideBarHovered ] = React.useState(false);
	const [ floatingSideBarHovered, setFloatingSideBarHovered ] = React.useState(false);
	const [ showLayer1, setShowLayer1 ] = React.useState(true);
	const [ showLayer2, setShowLayer2 ] = React.useState(false);

	return (
		<Space.Fill className="layers-demo">
			<Space.Top size={40} centerContent={Space.CenterType.HorizontalVertical}>
				<label><input type="checkbox" checked={showLayer1} onChange={e => setShowLayer1(e.target.checked)} /> Show layer 1</label>
				<label><input type="checkbox" checked={showLayer2} onChange={e => setShowLayer2(e.target.checked)} /> Show layer 2</label>
			</Space.Top>
			<Space.Fill>

				{ showLayer1 && 
					<Space.Layer zIndex={0}>

						<Space.Left
							id="layer_1_left"
							size={fixedSideBarHovered ? "75%" : "60%" } 
							onMouseEnter={() => setFixedSideBarHovered(true)} 
							onMouseLeave={() => setFixedSideBarHovered(false)} 
							as="nav">
							{Description("Left fixed (zIndex = 0) - HOVER TO CHANGE SIZE")}
						</Space.Left>

						<Space.Fill as="main" id="layer_1_main">
							{Description("Fill space not affected by floated left space in different layer but is affected by left space in same layer (zIndex = 0)")}
						</Space.Fill>

					</Space.Layer>	
				}

				{ showLayer2 && 
					<Space.Layer zIndex={1}>

						<Space.Left 
							id="layer_2_left"
							order={1}
							className="layer2"
							size={floatingSideBarHovered ? "30%" : "15%" } 
							onMouseEnter={() => setFloatingSideBarHovered(true)} 
							onMouseLeave={() => setFloatingSideBarHovered(false)} 
							as="aside">
							{Description("Left floated (zIndex = 1) - HOVER TO CHANGE SIZE")}
						</Space.Left>
						<Space.Left 
							id="layer_2_left1"
							order={2}
							className="layer2"
							size="15%" 
							as="section">
							{Description("Left floated (zIndex = 1)")}
						</Space.Left>
						<Space.Fill 
							as="main"
							className="layer2" 
							id="layer_2_main">
							{Description("Fill space not affected by floated left space in different layer but is affected by left space in same layer (zIndex = 0)")}
						</Space.Fill>

					</Space.Layer>
				}
			
			</Space.Fill>
		</Space.Fill>
	)
}

const Description = (props: string) => (
  <Space.Centered>
	<div className="description">
		<strong>{props}</strong>
	</div>
  </Space.Centered>
);