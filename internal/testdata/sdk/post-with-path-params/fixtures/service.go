// Generated by Fern. Do not edit.

package api

import (
	context "context"
	core "github.com/fern-api/fern-go/internal/testdata/sdk/post-with-path-params/fixtures/core"
	path "path"
)

type Service interface {
	SetName(ctx context.Context, userId string, request string) (string, error)
	SetNameV2(ctx context.Context, userId string, request *SetNameRequest) (string, error)
	SetNameV3(ctx context.Context, userId string, request *SetNameRequestV3) (*SetNameRequestV3Body, error)
	SetNameV4(ctx context.Context, userId string, request *SetNameRequestV4) (string, error)
	SetNameV5(ctx context.Context, userId string, request *SetNameRequestV5) (string, error)
}

func NewClient(baseURL string, httpClient core.HTTPClient, opts ...core.ClientOption) (Service, error) {
	options := new(core.ClientOptions)
	for _, opt := range opts {
		opt(options)
	}
	return &client{
		setNameEndpoint:   newSetNameEndpoint(path.Join(baseURL, "/users/%v/set-name"), httpClient, options),
		setNameV2Endpoint: newSetNameV2Endpoint(path.Join(baseURL, "/users/%v/set-name-v2"), httpClient, options),
		setNameV3Endpoint: newSetNameV3Endpoint(path.Join(baseURL, "/users/%v/set-name-v3"), httpClient, options),
		setNameV4Endpoint: newSetNameV4Endpoint(path.Join(baseURL, "/users/%v/set-name-v4"), httpClient, options),
		setNameV5Endpoint: newSetNameV5Endpoint(path.Join(baseURL, "/users/%v/set-name-v5"), httpClient, options),
	}, nil
}

type client struct {
	setNameEndpoint   *setNameEndpoint
	setNameV2Endpoint *setNameV2Endpoint
	setNameV3Endpoint *setNameV3Endpoint
	setNameV4Endpoint *setNameV4Endpoint
	setNameV5Endpoint *setNameV5Endpoint
}

func (s *client) SetName(ctx context.Context, userId string, request string) (string, error) {
	return s.setNameEndpoint.Call(ctx, userId, request)
}

func (s *client) SetNameV2(ctx context.Context, userId string, request *SetNameRequest) (string, error) {
	return s.setNameV2Endpoint.Call(ctx, userId, request)
}

func (s *client) SetNameV3(ctx context.Context, userId string, request *SetNameRequestV3) (*SetNameRequestV3Body, error) {
	return s.setNameV3Endpoint.Call(ctx, userId, request)
}

func (s *client) SetNameV4(ctx context.Context, userId string, request *SetNameRequestV4) (string, error) {
	return s.setNameV4Endpoint.Call(ctx, userId, request)
}

func (s *client) SetNameV5(ctx context.Context, userId string, request *SetNameRequestV5) (string, error) {
	return s.setNameV5Endpoint.Call(ctx, userId, request)
}
