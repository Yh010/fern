# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations

import datetime as dt
import typing

from ....core.datetime_utils import serialize_datetime
from .organization import Organization as resources_service_types_organization_Organization
from .user import User as resources_service_types_user_User

try:
    import pydantic.v1 as pydantic  # type: ignore
except ImportError:
    import pydantic  # type: ignore

T_Result = typing.TypeVar("T_Result")


class _Factory:
    def user(self, value: resources_service_types_user_User) -> Resource:
        return Resource(__root__=_Resource.User(**value.dict(exclude_unset=True), resource_type="user"))

    def organization(self, value: resources_service_types_organization_Organization) -> Resource:
        return Resource(__root__=_Resource.Organization(**value.dict(exclude_unset=True), resource_type="Organization"))


class Resource(pydantic.BaseModel):
    """
    from seed.mixed_case import Resource_User

    Resource_User(
        user_name="username",
        metadata_tags=["tag1", "tag2"],
        extra_properties={"foo": "bar", "baz": "qux"},
    )
    """

    factory: typing.ClassVar[_Factory] = _Factory()

    def get_as_union(self) -> typing.Union[_Resource.User, _Resource.Organization]:
        return self.__root__

    def visit(
        self,
        user: typing.Callable[[resources_service_types_user_User], T_Result],
        organization: typing.Callable[[resources_service_types_organization_Organization], T_Result],
    ) -> T_Result:
        if self.__root__.resource_type == "user":
            return user(
                resources_service_types_user_User(**self.__root__.dict(exclude_unset=True, exclude={"resource_type"}))
            )
        if self.__root__.resource_type == "Organization":
            return organization(
                resources_service_types_organization_Organization(
                    **self.__root__.dict(exclude_unset=True, exclude={"resource_type"})
                )
            )

    __root__: typing.Annotated[
        typing.Union[_Resource.User, _Resource.Organization], pydantic.Field(discriminator="resource_type")
    ]

    def json(self, **kwargs: typing.Any) -> str:
        kwargs_with_defaults: typing.Any = {"by_alias": True, "exclude_unset": True, **kwargs}
        return super().json(**kwargs_with_defaults)

    def dict(self, **kwargs: typing.Any) -> typing.Dict[str, typing.Any]:
        kwargs_with_defaults: typing.Any = {"by_alias": True, "exclude_unset": True, **kwargs}
        return super().dict(**kwargs_with_defaults)

    class Config:
        extra = pydantic.Extra.forbid
        json_encoders = {dt.datetime: serialize_datetime}


class _Resource:
    class User(resources_service_types_user_User):
        resource_type: typing.Literal["user"] = "user"

        class Config:
            allow_population_by_field_name = True
            populate_by_name = True

    class Organization(resources_service_types_organization_Organization):
        resource_type: typing.Literal["Organization"] = "Organization"

        class Config:
            allow_population_by_field_name = True
            populate_by_name = True


Resource.update_forward_refs()