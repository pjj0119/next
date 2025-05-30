import { getEnv } from '@/env/getEnv';

const FooterTopbtn = () => {
	const { ASSET_PREFIX } = getEnv();
	return (
		<div className="footerInner__topBtn">
			<button type="button" onClick={() => window.scrollTo({ top: 0 })}>
				<span className="topBtn__arrow"><img src={`${ASSET_PREFIX}/images/common/topBtn.png`} alt="" /></span>
													
				<span className="topBtn__text">TOP</span>
			</button>
		</div>
	)
}

export default FooterTopbtn