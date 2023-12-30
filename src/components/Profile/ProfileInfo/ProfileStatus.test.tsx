import TestRenderer from 'react-test-renderer'
import {ProfileStatus} from "./ProfileStatus";

test('span should be displayed', () => {
    const component = TestRenderer.create
    (<ProfileStatus status={'hello'} updateHandler={() => {
    }}/>)
    const root = component.root
    const span = root.findByType('span')
    expect(span.children.length).toBe(1)
    expect(span.props.children).toBe('hello')
})

test('input should be hidden', () => {
    const component = TestRenderer.create
    (<ProfileStatus status={'hello'} updateHandler={() => {
    }}/>)
    const root = component.root
    expect(() => root.findByType('input')).toThrow()
})

test('input should be displayed instead of span', () => {
    const component = TestRenderer.create
    (<ProfileStatus status={'hello'} updateHandler={() => {
    }}/>)
    const root = component.root
    const span = root.findByType('span')
    span.props.onDoubleClick()
    const input = root.findByType('input')
    expect(input.props.value).toBe('hello')
    expect(() => root.findByType('span')).toThrow()
})

test('test callback count', () => {
    const mockFn = jest.fn()
    const component = TestRenderer.create
    (<ProfileStatus status={'hello'} updateHandler={mockFn}/>)
    const instance = component.root.instance
    instance.onDeactivateEditMode()
    instance.onActivateEditMode()
    instance.onDeactivateEditMode()
    instance.onActivateEditMode()
    expect(mockFn.mock.calls.length).toBe(2)
})