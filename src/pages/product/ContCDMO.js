import styled, { css } from 'styled-components';
import imgCdmo1 from '../../assets/images/product/ico_cdmo1.png';
import imgCdmo2 from '../../assets/images/product/ico_cdmo2.png';
import imgCdmo3 from '../../assets/images/product/ico_cdmo3.png';
import imgCdmo4 from '../../assets/images/product/ico_cdmo4.png';
import iconArrow from '../../assets/images/product/ico_cdmo_arr.png';

const ContCDMO = ({idx}) => {
  var Cdmo = styled.div`
    margin:1rem 0;
    ol {
      display:flex;
      justify-content:space-between;
      align-items:center;
      flex-wrap:wrap;
      width:97rem;
      margin:12rem auto 0;
    }
    ol li {
      position:relative;
      font-size:2.4rem;
      font-weight:700;
      text-align:center;
      &+li:after {
        position:absolute;
        top:50%;
        left:-11rem;
        width:8.1rem;
        height:3.3rem;
        margin-top:-1.6rem;
        background:url(${iconArrow});
        content:'';
      }
      &:before {
        display:block;
        width:14rem;
        height:12rem;
        margin-bottom:4.2rem;
        content:'';
      }
      &.step1:before {
        background:url(${imgCdmo1});
      }
      &.step2:before {
        background:url(${imgCdmo2});
      }
      &.step3:before {
        background:url(${imgCdmo3});
      }
      &.step4:before {
        background:url(${imgCdmo4});
      }
    }

    .list_desc {
      display:flex;
      justify-content:flex-start;
      align-items:center;
      flex-wrap:wrap;
      margin-top:11rem;
      li {
        flex-basis:50%;
        padding:0 3.2rem;
        box-sizing:border-box;
      }
      dl {
        display:flex;
        align-items:flex-start;
        min-height:15rem;
        border-top:.1rem solid #dae0e6;
        box-sizing:border-box;
      }
      dt {
        position:relative;
        flex-basis:9.5rem;
        padding-top:3.5rem;
        font-size:2.4rem;
        font-weight:700;
        text-align:left;
        &:before {
          position:absolute;
          top:-.1rem;
          left:0;
          width:6rem;
          height:.1rem;
          background-color:#4280ff;
          content:'';
        }
      }
      dd {
        padding-top:3.5rem;
        font-size:1.6rem;
        line-height:1.5;
      }
    }
  `;

  return (
    <div id={idx} className="research-contents">
      <h3 className="research-title">Small molecule (NCE, AG), PEG & Peptide<br />process development,<br />GMP ?????? ??? ?????? ?????? ??????</h3>

      <Cdmo>
        <ol>
          <li className="step1">????????????</li>
          <li className="step2">????????????</li>
          <li className="step3">GMP??????</li>
          <li className="step4">????????????</li>
        </ol>
        <ul className="list_desc">
          <li>
            <dl>
              <dt>01</dt>
              <dd>?????? ??????????????? ?????? ????????????<br />?????? ?????? ???????????? ?????? ???????????? One-stop service ??????</dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt>02</dt>
              <dd>?????? ??????/??????, ????????? ??????/<br />validation ??? ?????? ????????? ?????? ????????? ?????????</dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt>03</dt>
              <dd>????????? ?????? ?????? ??? ?????? ????????? ???????????? ??? ??????<br />?????? ????????? GMP ?????? ????????? ??????</dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt>04</dt>
              <dd>Small molecule, peptide, PEG ??? ?????????<br />???????????? ?????? ?????? ??????</dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt>05</dt>
              <dd>?????? ???????????? ?????? ???????????? ?????? ??????<br />??????????????? ?????? ???</dd>
            </dl>
          </li>
        </ul>
      </Cdmo>
    </div>
  )
}

export default ContCDMO;
