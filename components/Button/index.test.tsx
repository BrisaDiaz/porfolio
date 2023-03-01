import { render, screen } from '@testing-library/react'
import Button from '.'

describe('button renders', () => {
    it('renders text content', () => {
        const text = 'This is a testing button'
        render(<Button>{text}</Button>)

        const button = screen.getByRole('button', {
            name: text,
        })

        expect(button).toBeInTheDocument()
    })
})
