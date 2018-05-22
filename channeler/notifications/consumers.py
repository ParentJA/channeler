# Third-party imports.
from channels.generic.websocket import AsyncJsonWebsocketConsumer

__author__ = 'Jason Parent'


class NotificationsConsumer(AsyncJsonWebsocketConsumer):

    async def receive_json(self, content, **kwargs):
        group = content.get('group')
        await self.channel_layer.group_add(group=group, channel=self.channel_name)
        await self.send_json({
            'detail': f'Added to group {group}.'
        })
