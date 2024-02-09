// This file was auto-generated by Fern from our API Definition.

package bar

import (
	fmt "fmt"
	core "github.com/fern-api/fern-go/internal/testdata/model/packages/fixtures/core"
)

type Bar struct {
	Name string `json:"name" url:"name"`
}

func (b *Bar) String() string {
	if value, err := core.StringifyJSON(b); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", b)
}