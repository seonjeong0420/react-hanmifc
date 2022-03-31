import styled, { css } from 'styled-components';
import bg from '../../assets/images/product/bg_pep.jpg';

const ContPEPTIDE = ({idx}) => {
  var Peptide = styled.div`
    height:108rem;
    background:url(${bg}) no-repeat center;
    ol {
      display:flex;
      justify-content:stretch;
      align-items:flex-start;
      flex-wrap:wrap;
      width:49rem;
      height:100%;
      padding:5rem 8rem 0 10rem;
      box-sizing:border-box;
      background-color:rgba(255,255,255,.8);
    }
    li+li {
      position:relative;
      margin-top:2.5rem;
      padding-top:9rem;
      &:before {
        position:absolute;
        top:0;
        left:8rem;
        width:.1rem;
        height:6rem;
        margin:0 auto;
        background-color:#222;
        content:'';
      }
    }
    dt {
      position:relative;
      margin-top:.5rem;
      font-size:2.4rem;
      font-weight:700;
    }
    sup {
      position:absolute;
      top:0;
      left:-3rem;
      font-size:1.4rem;
      font-weight:400;
      z-index:1;
      &:after {
        position:absolute;
        top:0;
        right:-.6rem;
        width:1.6rem;
        height:1.6rem;
        border-radius:100%;
        background-color:#9abafb;
        z-index:-1;
        content:'';
      }
    }
    dd {
      margin-top:1.5rem;
    }
  `;

  return (
    <div id={idx} className="research-contents">
      <h3 className="research-title">독자적인 개발 Resin과 전문적인 합성 기술로<br />GMP 기반 고품질의 Peptide 제공</h3>
      <Peptide>
        <ol>
          <li>
            <dl>
              <dt><sup>01</sup>펩타이드 합성</dt>
              <dd>Peptide sequence에 따른 전략적 합성법 보유 / 정제 전문인력을 통한 고품질의 Peptide 제조</dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt><sup>02</sup>전문적인 분석</dt>
              <dd>최신 분석 장비 다량 보유/ 난이도 높은 불순물의 분리 및 정량 기술력 보유 / 불순물 프로파일링을 통한 불순물 최소화 합성 전략 개발</dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt><sup>03</sup>다양한 Lab Scale용 장비</dt>
              <dd>자동 합성기를 비롯한 다양한 scale 반응기 보유</dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt><sup>04</sup>GMP 설비</dt>
              <dd>품질 보증을 위한 철저한 관리 시스템을 갖춘 GMP 설비 보유</dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt><sup>05</sup>Resin 개발</dt>
              <dd>고순도 Peptide 합성을 위한 독자적인 Resin 개발 (특허출원)</dd>
            </dl>
          </li>
        </ol>
      </Peptide>
    </div>
  )
}

export default ContPEPTIDE;
