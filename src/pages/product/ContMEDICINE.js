import styled, { css } from 'styled-components';
import bg from '../../assets/images/product/img_bdoc.png';

const ContMEDICINE = ({idx}) => {
  var Title = styled.div`
    .research-title {
      position:relative;
      margin-bottom:2rem;
      &:before {
        position:absolute;
        top:0;
        right:0;
        width:32.1rem;
        height:20.6rem;
        background:url(${bg});
        content:'';
      }
    }
    p {
      width:48.5rem;
      line-height:1.5;
    }
  `;

  var Step = styled.div`
    height:19.5rem;
    margin-top:7rem;
    padding:6rem 0 4rem;
    box-sizing:border-box;
    background-color:#303242;
    text-align:center;
    ul {
      display:flex;
      justify-content:center;
      align-items:flex-end;
      height:100%;
    }
    li {
      flex:1;
      position:relative;
      &+li:before {
        position:absolute;
        top:-4.5rem;
        left:-9rem;
        width:17.7rem;
        height:.1rem;
        background-color:#fff;
        content:'';
      }
      &+li:after {
        position:absolute;
        top:-4.9rem;
        left:7.8rem;
        width:1rem;
        height:.1rem;
        background-color:#fff;
        transform:rotate(45deg);
        content:'';
      }
      span {
        display:block;
        position:relative;
        min-height:3.4rem;
        color:#fff;
        &:before {
          position:absolute;
          top:-5.5rem;
          left:50%;
          width:2rem;
          height:2rem;
          margin-left:-1rem;
          border-radius:100%;
          border:.4rem solid #fff;
          box-sizing:border-box;
          content:'';
        }
        &:after {
          position:absolute;
          top:-4.9rem;
          left:50%;
          width:.8rem;
          height:.8rem;
          margin-left:-.4rem;
          border-radius:100%;
          background-color:#fff;
          content:'';
        }
      }
    }
  `


  return (
    <div id={idx} className="research-contents">
      <Title>
        <h3 className="research-title">고순도 API 개발<br />고객사 요청에 대한 빠른 대응<br />지속적인 원가 절감 및 생산성 향상<br />지속적인 품질 개선 Impurity 관리 철저</h3>
        <p>한미정밀화학은 원료의약품에 대한 탁월한 경험과 기술을 보유한 기업으로 수 십년간의 연구개발 경험과 합성, 품질관리 능력을 갖추고 전세계에 제품을 공급하고 있습니다.</p>
      </Title>
      <Step>
        <ul>
          <li><span>개발 제품 선정</span></li>
          <li><span>Process &amp; 품질 차별화 Study</span></li>
          <li><span>Pilot test &amp; Impurity Study</span></li>
          <li><span>PAR Study &amp; Scale up &amp; Analytical Validation</span></li>
          <li><span>Process Validation &amp; CTD</span></li>
        </ul>
      </Step>
      <div className="c-research-layout">
        <h4>일반의약품 개발현황</h4>
      </div>
    </div>
  )
}

export default ContMEDICINE;
