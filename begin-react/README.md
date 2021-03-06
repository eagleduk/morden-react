1. props
- 태그 내부에 넣을수도 있고
- 태그로 감싸는 것도 props 로 정의

2. 조건부 렌더링

3. useState

4. input 상태 관리하기

5. 여러개의 input 상태 관리하기

6. useRef
- element 의 reference 를 정의

7. 배열 랜더링
- key 값이 있어야 효율적으로 랜더링을 할 수 있다.

8. useRef로 컴포넌트 안의 변수 만들기
- 변경되어도 component 는 리랜더링 되지 않는다.
- component 가 리랜더링 되어도 값을 저장하고 싶을때

9. 배열에 항목 추가하기
- 배열에 항목을 추가할 때에는 원본은 건드리지 않고 spread 나 concat 으로 복사 후 사용한다.

10. 배열에 항목 삭제하기
- 불변성을 유지하기위해 filter 를 사용하는게 효율적
- 버튼 및 이벤트에 함수호출로 함수를 실행해야 하고 그냥 함수 호출을 하면 랜더링시 이벤트를 발생하지 않아도 함수가 실행된다.

11. 배열에 항목 수정하기
- 배열의 특정 Item 을 업데이트 할 때에도 map 을 사용할 수 있다.

12. useEffect Hook
- 랜더링, 리랜더링 될때마다 작업을 수행하도록 할 수있다.
- 두번째 파라메터의 값이 component mount, unmount, update 시 함수를 수행하도록 할 수 있다.

13. useMemo Hook
- 연산된 값 재사용
- 성능 최적화시 사용
- 원하는 값이 변경되었을때 실행하고, 변경되지 않았을때에는 기존의 실행결과를 가져온다.
- 두번째 파라메터의 값이 변경될 때 첫번째 파라메터의 함수 수행

14. useCallback Hook
- 함수 재사용을 위한 Hook

15. React.memo
- 기존의 랜더링 결과를 재사용 할수 있게 최적화 하는 함수
- 모든 최적화는 꼭 필요한 최적화 부분에서만 사용하는것이 중요.. 한번 선언되면 거의 변함이 없는 함수, 변수에 적용

16. useReducer Hook
- useState 처럼 상태를 업데이트시 사용
- 상태 업데이트 로직을 컴포넌트 밖으로 분리 가능
- reducer : 상태를 업데이트하는 함수
- [number,dispatch] = useReducer([함수],[기본값])

17. Custom Hook
- useState, useCallback 등을 이용하여 Hook 을 다른 파일 등으로 만들어서 가져다 사용하도록 한다.

18. Context API를 사용한 전역값 관리
- 여러 단계의 컴포넌트를 통하여 값을 전달할 때 사용
- useContext, createContext 를 이용하여 값을 저장하고 필요할 때 꺼내어 사용할 수 있다.

19. immer 를 사용한 불변성 지키기
- 객체, 배열을 직접 고치지 않고 새롭게 만들어 사용
- immer를 사용하면 불변성을 해치는 코드를 작성해도 대신 불변성 유지를 해준다.
- yarn add immer
- useState 등 기존 객체의 불변성을 관리하기 힘들어 지면 immer produce 의 첫번째 파라메터에 함수를 입력하면 updater로 사용가능 하다.
** import 이후 window 에 선언을 해주면 개발자 도구에서 해당 컴포넌트를 사용할 수 있다. (함수도 가능한지 나중 테스트 필요)

20. class 형 컴포넌트
- 현재는 잘 사용하지 않는 방식
- Hook 를 사용하면서 함수형 컴포넌트를 사용

21. lifeCycle
- class 컴포넌트에서 사용가능
- https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
- 컴포넌트 마운트시 constructor -> getDerivedStateFromProps -> render -> componentDidMount
- 컴포넌트 업데이트시 getDerivedStateFromProps -> shouldComponentUpdate -> render -> getSnapshotBeforeUpdate -> componentDidUpdate
- 컴포넌트 언마운트시 componentWillUnmount
- componentDidCatch => 클래스형 컴포넌트에서만 사용
** error 관리 사이트 Sentry

22. 개발관련 extension
- prettier
- ESLint
- snippet -> https://snippet-generator.app/